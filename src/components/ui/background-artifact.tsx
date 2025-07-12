import { useMemo } from "react";

function generateRandomPolygon() {
  const points = [];
  const numPoints = 8 + Math.floor(Math.random() * 4); // 8-11 points

  for (let i = 0; i < numPoints; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    points.push(`${x.toFixed(1)}% ${y.toFixed(1)}%`);
  }

  return `polygon(${points.join(", ")})`;
}

function generateRandomGradient() {
  const colors = [
    ["#ff80b5", "#9089fc"],
    ["#ff6b6b", "#4ecdc4"],
    ["#a8edea", "#fed6e3"],
    ["#ffecd2", "#fcb69f"],
    ["#ff9a9e", "#fecfef"],
    ["#a8caba", "#5d4e75"],
    ["#ffd89b", "#19547b"],
    ["#667eea", "#764ba2"],
  ];

  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  return {
    from: randomColors[0],
    to: randomColors[1],
  };
}

export function BackgroundArtifact() {
  const pattern = useMemo(() => {
    const isTopLeftBottomRight = Math.random() > 0.5;
    return {
      isTopLeftBottomRight,
      firstCorner: isTopLeftBottomRight ? "top-left" : "top-right",
      secondCorner: isTopLeftBottomRight ? "bottom-right" : "bottom-left",
    };
  }, []);

  const firstArtifact = useMemo(
    () => ({
      clipPath: generateRandomPolygon(),
      gradient: generateRandomGradient(),
      opacity: 0.2 + Math.random() * 0.3, // 0.2 to 0.5
      rotation: Math.random() * 360, // 0 to 360 degrees
      scale: 0.8 + Math.random() * 0.4, // 0.8 to 1.2
    }),
    []
  );

  const secondArtifact = useMemo(
    () => ({
      clipPath: generateRandomPolygon(),
      gradient: generateRandomGradient(),
      opacity: 0.2 + Math.random() * 0.3, // 0.2 to 0.5
      rotation: Math.random() * 360, // 0 to 360 degrees
      scale: 0.8 + Math.random() * 0.4, // 0.8 to 1.2
    }),
    []
  );

  return (
    <>
      {/* First artifact - either top-left or top-right, but closer to center */}
      <div
        className={`absolute -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none ${
          pattern.firstCorner === "top-left"
            ? "top-[10%] left-[10%]"
            : "top-[10%] right-[10%]"
        }`}
        style={{ maxWidth: "58rem", maxHeight: "56rem" }}
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[30rem] sm:w-[38rem]"
          style={{
            clipPath: firstArtifact.clipPath,
            background: `linear-gradient(to top right, ${firstArtifact.gradient.from}, ${firstArtifact.gradient.to})`,
            opacity: firstArtifact.opacity,
            transform: `rotate(${firstArtifact.rotation}deg) scale(${Math.min(firstArtifact.scale, 1.1)})`,
          }}
        />
      </div>
      {/* Second artifact - either bottom-right or bottom-left, but closer to center */}
      <div
        className={`absolute -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none ${
          pattern.secondCorner === "bottom-right"
            ? "bottom-[10%] right-[10%]"
            : "bottom-[10%] left-[10%]"
        }`}
        style={{ maxWidth: "28rem", maxHeight: "16rem" }}
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[20rem] sm:w-[28rem]"
          style={{
            clipPath: secondArtifact.clipPath,
            background: `linear-gradient(to top right, ${secondArtifact.gradient.from}, ${secondArtifact.gradient.to})`,
            opacity: secondArtifact.opacity,
            transform: `rotate(${secondArtifact.rotation}deg) scale(${Math.min(secondArtifact.scale, 1.1)})`,
          }}
        />
      </div>
    </>
  );
}
