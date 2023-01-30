import { render, screen } from "@testing-library/react";
import Spotify from "../../components/spotify";

const tracks = [
  {
    artists: [{ name: "Artist 1", url: "/artist-1", id: "1" }],
    album: "Album 1",
    albumUrl: "/album-1",
    id: "1",
    image: "/images/image-1.jpg",
    trackName: "Track 1",
    trackUrl: "/track-1",
    duration: "3:45",
  },
  {
    artists: [{ name: "Artist 2", url: "/artist-2", id: "2" }],
    album: "Album 2",
    albumUrl: "/album-2",
    id: "2",
    image: "/images/image-2.jpg",
    trackName: "Track 2",
    trackUrl: "/track-2",
    duration: "4:30",
  },
];

describe("Spotify component", () => {
  it("renders a live feed of recently played tracks", () => {
    render(<Spotify tracks={tracks} />);
    expect(
      screen.getByText("A live feed of my recently played tracks on Spotify.")
    ).toBeInTheDocument();
  });

  it("renders a list of tracks", () => {
    render(<Spotify tracks={tracks} />);
    expect(screen.getByText("Track 1")).toBeInTheDocument();
    expect(screen.getByText("Track 2")).toBeInTheDocument();
  });

  it("renders the track's artists", () => {
    render(<Spotify tracks={tracks} />);
    expect(screen.getByText("Artist 1")).toBeInTheDocument();
    expect(screen.getByText("Artist 2")).toBeInTheDocument();
  });

  it("renders the track's album", () => {
    render(<Spotify tracks={tracks} />);
    expect(screen.getByText("Album 1")).toBeInTheDocument();
    expect(screen.getByText("Album 2")).toBeInTheDocument();
  });

  it("renders the track's duration", () => {
    render(<Spotify tracks={tracks} />);
    expect(screen.getByText("3:45")).toBeInTheDocument();
    expect(screen.getByText("4:30")).toBeInTheDocument();
  });

  it("renders the track's image", () => {
    render(<Spotify tracks={tracks} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
  });

  it("renders a link to the track's URL", () => {
    render(<Spotify tracks={tracks} />);
    expect(screen.getByText("Track 1")).toHaveAttribute("href", "/track-1");
    expect(screen.getByText("Track 2")).toHaveAttribute("href", "/track-2");
  });

  it("renders a link to the album's URL", () => {
    render(<Spotify tracks={tracks} />);
    expect(screen.getByText("Album 1")).toHaveAttribute("href", "/album-1");
    expect(screen.getByText("Album 2")).toHaveAttribute("href", "/album-2");
  });

  it("renders a link to the artist's URL", () => {
    render(<Spotify tracks={tracks} />);
    expect(screen.getByText("Artist 1")).toHaveAttribute("href", "/artist-1");
    expect(screen.getByText("Artist 2")).toHaveAttribute("href", "/artist-2");
  });
});
