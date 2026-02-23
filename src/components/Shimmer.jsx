import { ShimmerTitle, ShimmerText } from "shimmer-effects-react";

const Shimmer = () => {
    return (
        <div className="shimmer-wrapper" style={{ marginTop: '10px' }}>
            {[...Array(5)].map((_, index) => (
                <div key={index} style={{ marginBottom: '15px', maxWidth: '300px' }}>
                    <ShimmerText line={1} gap={10} variant="secondary" />
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
