import Iframe from 'react-iframe';
export default function Spotify() {
  return (
    <div>
      <Iframe
        src="https://open.spotify.com/embed/playlist/24Oku7B1TBNbHddN5IbqH1?utm_source=generator"
        width="100%"
        height="152"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></Iframe>
    </div>
  );
}
