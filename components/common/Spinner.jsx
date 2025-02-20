export default function Spinner() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <svg viewBox="0 0 20 20" className="w-16 h-16 fill-white">
                <style>
                    {`#rect1662 {
                        animation: square-spin-1662 3s cubic-bezier(.09, .57, .49, .9) infinite;
                        transform-origin: 50% 50%;
                    }
                    @keyframes square-spin-1662 {
                        25% { transform: rotateX(180deg) rotateY(0); }
                        50% { transform: rotateX(180deg) rotateY(180deg); }
                        75% { transform: rotateX(0) rotateY(180deg); }
                        100% { transform: rotateX(0) rotateY(0); }
                    }`}
                </style>
                <rect width="20" height="20" fill="currentColor" id="rect1662"/>
            </svg>
        </div>
    );
}
