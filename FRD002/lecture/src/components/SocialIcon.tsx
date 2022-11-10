import React from "react";

//Alex用黎做example咁講如果以後佢知道呢個component要重用，一開始會點諗

function SocialIcon(props: {
  icon: React.ReactNode;
  platformName: string;
  color: string;
  onClick: () => void;
}) {
  return <div>{props.platformName}</div>;
}

export default SocialIcon;
