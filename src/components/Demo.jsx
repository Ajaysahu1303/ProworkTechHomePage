export default function Demo() {
    return (
        <section id="demo">
            <h2>How It Works</h2>
            <div className="demo-content">
                <p style={{ marginBottom: '20px', color: 'var(--text-color)' }}>
                    Check out our streamlined workflow process designed for efficiency.
                </p>

                <div className="video-wrapper">
                    <div className="iframe-container">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/mR_opjYy_Gg?si=KdN4GBrCSrfi_uOJ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}