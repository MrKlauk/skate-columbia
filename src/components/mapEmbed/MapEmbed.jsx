import "./MapEmbed.css";

const MapEmbed = () => {
    return (
        <section className="map-embed">
            <div className="map-frame">
                <iframe
                    src="https://www.google.com/maps?q=Columbia,+SC&output=embed"
                    title="Map of Columbia, SC"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default MapEmbed;