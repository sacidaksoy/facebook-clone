import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe className="fb-page"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FShadowFiend.RP&tabs=timeline&width=224&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=371478716667746"
        width="224"
        height="500"
        style={{border:"none",overflow:"hidden", width:'100%'}}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="sf"
      ></iframe>
    </div>
  );
}

export default Widgets;
