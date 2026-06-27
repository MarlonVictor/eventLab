export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="animated-gradient-bg absolute inset-0" />
            <div
                className="absolute inset-0 bg-blur bg-cover bg-center bg-no-repeat opacity-20"
                aria-hidden
            />
        </div>
    )
}
