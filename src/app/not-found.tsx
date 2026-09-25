import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-4">
            <div className="text-center">
                <p className="text-8xl font-bold text-primary">
                    404
                </p>

                <h1 className="mt-4 text-3xl font-bold">
                    PAGE NOT FOUND
                </h1>

                <p className="mt-3 text-base-content/60">
                    The page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="btn btn-primary mt-6"
                >
                    Back to Workouts
                </Link>
            </div>
        </main>
    );
};

export default NotFound;