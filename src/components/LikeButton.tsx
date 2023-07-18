import fingerprint from "@fingerprintjs/fingerprintjs";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline/index.js";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid/index.js";
import { useEffect, useState } from "react";

type Props = {
    slug: string;
};

const LikeButton = ({ slug }: Props) => {
    const [visitorId, setVisitorId] = useState("");
    const [likesCount, setLikesCount] = useState(0);
    const [currentUserHasLiked, setCurrentUserHasLiked] = useState(false);
    const [loading, setLoading] = useState(true);

    // Get device fingerprint on initial load
    useEffect(() => {
        const getFingerprint = async () => {
            const fp = await fingerprint.load({ monitoring: false });
            const result = await fp.get();
            setVisitorId(result.visitorId);
        };
        getFingerprint();
    }, []);

    // Get likes status as soon as we have a visitorId
    useEffect(() => {
        const getLikes = async () => {
            const response = await fetch(
                `https://merlin-GETLikes.express.val.run?postSlug=${slug}`,
                {
                    headers: new Headers({
                        Authorization: `Bearer ${visitorId}`,
                    }),
                }
            );
            if (!response.ok) {
                return;
            }

            const json = await response.json();
            setLikesCount(json.count);
            setCurrentUserHasLiked(json.currentUserHasLiked);
            setLoading(false);
        };
        if (visitorId) {
            getLikes();
        }
    }, [slug, visitorId]);

    // Persist like status
    const handleLike = async () => {
        // Update optimistically
        setLikesCount((s) => s + 1);
        setCurrentUserHasLiked(true);

        const response = await fetch("https://merlin-POSTLikes.express.val.run", {
            method: "POST",
            headers: new Headers({
                Authorization: `Bearer ${visitorId}`,
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ postSlug: slug }),
        });

        // Revert if request fails
        if (!response.ok) {
            setLikesCount((s) => s - 1);
            setCurrentUserHasLiked(false);
        }
    };

    return (
        <p className="text-xl mt-8 pt-8 border-t border-slate-200 dark:border-slate-600">
            {loading ? (
                "Loading likes..."
            ) : (
                <button
                    onClick={handleLike}
                    disabled={currentUserHasLiked}
                    type="button"
                    className="flex items-center gap-2"
                >
                    {currentUserHasLiked ? (
                        <HeartIconSolid className="w-8 text-red-600 animate-like" />
                    ) : (
                        <HeartIconOutline className="w-8 text-red-600" />
                    )}
                    {likesCount} {likesCount === 1 ? "Like" : "Likes"}
                    {currentUserHasLiked && " - Thanks!"}
                </button>
            )}
        </p>
    );
};

export default LikeButton;
