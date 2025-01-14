import React from 'react';

function HeaderBox({ type = 'title', title, subtext, user }: HeaderBoxProps) {
  return (
    <div className="header-box">
      <div className="header-box-title">
        {title}
        {type === 'greeting' && <span className="text-bankGradient">&nbsp;{user}</span>}
      </div>
      <p className="">{subtext}</p>
    </div>
  );
}

export default HeaderBox;
