// src/stories/FigmaDesigns.stories.jsx
import React from "react";

export default {
  title: "Design System/Figma Designs",
  parameters: { layout: "centered" },
};

export const FiberSightDesigns = {
  name: "FiberSight Main Design",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/HB4VLPxdC4U5hTlhQUqzdj/FiberSight?node-id=548-183&t=KTEluFTPTdba4Mhy-1",
    },
  },
  render: () => (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>FiberSight Designs from Figma</h2>
      <p>
        Open the <b>Design</b> tab below to see the Figma embed.
      </p>
    </div>
  ),
};
