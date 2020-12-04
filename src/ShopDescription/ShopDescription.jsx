import React from "react";
import "./ShopDescription.css";
import donutlocal from "./colordonut.jpg";

function ShopDescription() {
  return (
    <div className="WrapperShopDecription">
      <div className="titleNuestroLocal">Nuestro Local.</div>
      <img className="imageShopDescription" src={donutlocal} />
      <p className="TextNuestroLocal">
        Ut est lectus, consectetur sit amet augue sed, faucibus molestie lorem.
        Proin vulputate nec libero vel bibendum. Suspendisse eu nisl blandit,
        consectetur toror vel, consectetur nisl. Nam maximus finibus urna, non
        tristique nisl sagittis at. Maecenas quis sollicitudin est. Cras eget
        pulvinar tortor. Phasellus luctus nisl arcu, rutrum ullamcorper erat
        semper sed. Nullam vitae tempus nunc, quis luctus odio. Fusce
        condimentum sapien a nisi ultricies, at maximus odio tincidunt. Integer
        sagittis ex et lacus mattis tristique. Aliquam auctor egestas molestie.
        Integer vitae pharetra est. Mauris in ligula ultrices, semper eros eget,
        ornare felis. Proin vulputate semper arcu, ut sodales ex sollicitudin
        ac.
      </p>
    </div>
  );
}

export { ShopDescription };
