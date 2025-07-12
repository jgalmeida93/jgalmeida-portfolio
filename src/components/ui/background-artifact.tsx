import { useMemo } from "react";

function generateRandomPolygon() {
  const shapes = [
    // Abstract blob shape
    () => {
      const points = [];
      const numPoints = 12 + Math.floor(Math.random() * 8); // 12-19 points
      const centerX = 50 + (Math.random() - 0.5) * 20;
      const centerY = 50 + (Math.random() - 0.5) * 20;

      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * 2 * Math.PI;
        const radius = 20 + Math.random() * 30;
        const x =
          centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 15;
        const y =
          centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * 15;
        points.push(
          `${Math.max(0, Math.min(100, x)).toFixed(1)}% ${Math.max(0, Math.min(100, y)).toFixed(1)}%`
        );
      }
      return `polygon(${points.join(", ")})`;
    },

    // Star-like shape
    () => {
      const points = [];
      const numSpikes = 5 + Math.floor(Math.random() * 4); // 5-8 spikes
      const outerRadius = 35 + Math.random() * 15;
      const innerRadius = 10 + Math.random() * 10;

      for (let i = 0; i < numSpikes * 2; i++) {
        const angle = (i / (numSpikes * 2)) * 2 * Math.PI;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        points.push(
          `${Math.max(0, Math.min(100, x)).toFixed(1)}% ${Math.max(0, Math.min(100, y)).toFixed(1)}%`
        );
      }
      return `polygon(${points.join(", ")})`;
    },

    // Organic wave shape
    () => {
      const points = [];
      const numPoints = 8 + Math.floor(Math.random() * 6);
      const amplitude = 15 + Math.random() * 20;
      const frequency = 1 + Math.random() * 2;

      for (let i = 0; i < numPoints; i++) {
        const t = i / (numPoints - 1);
        const x = t * 100;
        const y =
          50 +
          Math.sin(t * Math.PI * frequency) * amplitude +
          (Math.random() - 0.5) * 10;
        points.push(
          `${x.toFixed(1)}% ${Math.max(0, Math.min(100, y)).toFixed(1)}%`
        );
      }

      // Close the shape
      points.push("100% 100%", "0% 100%");
      return `polygon(${points.join(", ")})`;
    },

    // Geometric abstract shape
    () => {
      const points = [];
      const segments = 3 + Math.floor(Math.random() * 4); // 3-6 segments

      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * 2 * Math.PI;
        const radius = 25 + Math.random() * 25;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        points.push(
          `${Math.max(0, Math.min(100, x)).toFixed(1)}% ${Math.max(0, Math.min(100, y)).toFixed(1)}%`
        );

        // Add a control point for more organic feel
        if (i < segments - 1) {
          const midAngle = angle + (2 * Math.PI) / segments / 2;
          const midRadius = 15 + Math.random() * 20;
          const midX = 50 + Math.cos(midAngle) * midRadius;
          const midY = 50 + Math.sin(midAngle) * midRadius;
          points.push(
            `${Math.max(0, Math.min(100, midX)).toFixed(1)}% ${Math.max(0, Math.min(100, midY)).toFixed(1)}%`
          );
        }
      }
      return `polygon(${points.join(", ")})`;
    },

    // Spiral-like shape
    () => {
      const points = [];
      const turns = 2 + Math.random() * 2; // 2-4 turns
      const pointsPerTurn = 8;
      const totalPoints = Math.floor(turns * pointsPerTurn);

      for (let i = 0; i < totalPoints; i++) {
        const t = i / totalPoints;
        const angle = t * 2 * Math.PI * turns;
        const radius = 5 + t * 40; // Radius increases with angle
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        points.push(
          `${Math.max(0, Math.min(100, x)).toFixed(1)}% ${Math.max(0, Math.min(100, y)).toFixed(1)}%`
        );
      }
      return `polygon(${points.join(", ")})`;
    },

    // Crescent shape
    () => {
      const points = [];
      const outerRadius = 40 + Math.random() * 20;
      const innerRadius = 20 + Math.random() * 15;
      const startAngle = Math.PI * 0.2 + Math.random() * Math.PI * 0.6;
      const endAngle = Math.PI * 1.8 + Math.random() * Math.PI * 0.6;

      // Outer arc
      for (let i = 0; i <= 20; i++) {
        const angle = startAngle + (endAngle - startAngle) * (i / 20);
        const x = 50 + Math.cos(angle) * outerRadius;
        const y = 50 + Math.sin(angle) * outerRadius;
        points.push(
          `${Math.max(0, Math.min(100, x)).toFixed(1)}% ${Math.max(0, Math.min(100, y)).toFixed(1)}%`
        );
      }

      // Inner arc (reverse direction)
      for (let i = 20; i >= 0; i--) {
        const angle = startAngle + (endAngle - startAngle) * (i / 20);
        const x = 50 + Math.cos(angle) * innerRadius;
        const y = 50 + Math.sin(angle) * innerRadius;
        points.push(
          `${Math.max(0, Math.min(100, x)).toFixed(1)}% ${Math.max(0, Math.min(100, y)).toFixed(1)}%`
        );
      }

      return `polygon(${points.join(", ")})`;
    },

    // Lightning bolt shape
    () => {
      const points = [];
      const segments = 4 + Math.floor(Math.random() * 3);
      const zigzag = [];

      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * 100;
        const y =
          30 + Math.sin(i * Math.PI * 2) * 20 + (Math.random() - 0.5) * 15;
        zigzag.push([x, y]);
      }

      // Create zigzag path
      for (let i = 0; i < zigzag.length; i++) {
        const [x, y] = zigzag[i];
        points.push(
          `${x.toFixed(1)}% ${Math.max(0, Math.min(100, y)).toFixed(1)}%`
        );
      }

      // Close the shape
      points.push("100% 100%", "0% 100%");
      return `polygon(${points.join(", ")})`;
    },
  ];

  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  return randomShape();
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
    ["#f093fb", "#f5576c"],
    ["#4facfe", "#00f2fe"],
    ["#43e97b", "#38f9d7"],
    ["#fa709a", "#fee140"],
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

function generateRandomPosition() {
  const positions = [
    // Top left area
    { top: "5%", left: "5%" },
    { top: "10%", left: "15%" },
    { top: "15%", left: "8%" },

    // Top right area
    { top: "8%", right: "10%" },
    { top: "12%", right: "5%" },
    { top: "18%", right: "15%" },

    // Bottom left area
    { bottom: "8%", left: "12%" },
    { bottom: "15%", left: "5%" },
    { bottom: "10%", left: "20%" },

    // Bottom right area
    { bottom: "12%", right: "8%" },
    { bottom: "8%", right: "15%" },
    { bottom: "20%", right: "5%" },

    // Center areas
    { top: "30%", left: "25%" },
    { top: "25%", right: "30%" },
    { bottom: "35%", left: "20%" },
    { bottom: "30%", right: "25%" },

    // Random positions
    { top: `${15 + Math.random() * 20}%`, left: `${10 + Math.random() * 30}%` },
    { top: `${20 + Math.random() * 15}%`, right: `${5 + Math.random() * 25}%` },
    {
      bottom: `${10 + Math.random() * 25}%`,
      left: `${5 + Math.random() * 35}%`,
    },
    {
      bottom: `${15 + Math.random() * 20}%`,
      right: `${10 + Math.random() * 30}%`,
    },
  ];

  return positions[Math.floor(Math.random() * positions.length)];
}

function generateRandomSize() {
  const sizes = [
    { width: "20rem", height: "12rem" },
    { width: "25rem", height: "15rem" },
    { width: "30rem", height: "18rem" },
    { width: "35rem", height: "20rem" },
    { width: "40rem", height: "25rem" },
    { width: "15rem", height: "10rem" },
    { width: "18rem", height: "12rem" },
    { width: "22rem", height: "14rem" },
    { width: "28rem", height: "16rem" },
    { width: "32rem", height: "20rem" },
  ];

  return sizes[Math.floor(Math.random() * sizes.length)];
}

export function BackgroundArtifact() {
  // Generate 3-5 random artifacts
  const numArtifacts = 3 + Math.floor(Math.random() * 3); // 3-5 artifacts

  const artifacts = useMemo(() => {
    return Array.from({ length: numArtifacts }, () => ({
      clipPath: generateRandomPolygon(),
      gradient: generateRandomGradient(),
      opacity: 0.2 + Math.random() * 0.2, // 0.2 to 0.4
      rotation: Math.random() * 360, // 0 to 360 degrees
      scale: 0.7 + Math.random() * 0.6, // 0.7 to 1.3
      position: generateRandomPosition(),
      size: generateRandomSize(),
      blur: Math.random() > 0.5 ? "blur-2xl" : "blur-3xl",
    }));
  }, [numArtifacts]);

  return (
    <>
      {artifacts.map((artifact, index) => (
        <div
          key={index}
          className={`absolute -z-10 transform-gpu overflow-hidden ${artifact.blur} pointer-events-none`}
          style={{
            ...artifact.position,
            width: artifact.size.width,
            height: artifact.size.height,
          }}
          aria-hidden="true"
        >
          <div
            className="w-full h-full"
            style={{
              clipPath: artifact.clipPath,
              background: `linear-gradient(to top right, ${artifact.gradient.from}, ${artifact.gradient.to})`,
              opacity: artifact.opacity,
              transform: `rotate(${artifact.rotation}deg) scale(${artifact.scale})`,
            }}
          />
        </div>
      ))}
    </>
  );
}
