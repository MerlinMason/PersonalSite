type Props = {
    src: string;
    title: string;
    height?: number;
};

const IFrame = ({ src, title, height = 380 }: Props) => (
    <iframe src={src} height={height} title={title} className="not-prose w-full" seamless />
);

export default IFrame;
