const Loading = () => {
    return (
        <main className="flex min-h-[60vh] items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[#ccff00]" />

                <p className="text-sm uppercase tracking-widest text-gray-400">
                    Loading workouts...
                </p>

            </div>
        </main>
    );
};

export default Loading;