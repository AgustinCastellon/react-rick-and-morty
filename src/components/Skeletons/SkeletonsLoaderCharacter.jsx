
const SkeletonLoader = () => {
    return (
        <div className="flex gap-20 w-full">
            <div className="animate-pulse flex space-x-4 ">
                <div className="rounded-full bg-gray-300 h-48 w-48"></div>
            </div>
            <div className="animate-pulse flex space-x-4 ">
                <div className="rounded-full bg-gray-300 h-48 w-48"></div>
            </div>
            <div className="animate-pulse flex space-x-4 ">
                <div className="rounded-full bg-gray-300 h-48 w-48"></div>
            </div>
            <div className="animate-pulse flex space-x-4 ">
                <div className="rounded-full bg-gray-300 h-48 w-48"></div>
            </div>
            <div className="animate-pulse flex space-x-4 ">
                <div className="rounded-full bg-gray-300 h-48 w-48"></div>
            </div>
        </div>
    );
};

export default SkeletonLoader;