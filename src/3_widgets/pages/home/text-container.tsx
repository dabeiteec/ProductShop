import React from "react";
import styled from "styled-components";

export const TextContainer: React.FC = () => {
  return (
    <Container>
      <FatText style={{fontWeight:600}}>WHAT WE BELIEVE</FatText>
      <div className="about_product">
        <FatText>We believe in produce. Tasty produce. Produce like:</FatText>
        <FatText>
          Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas.
          Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants.
          Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli.
          Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries.
          Raspberries. Cilantro. Parsley. Dill.
        </FatText>
        <FatText>What are we forgetting?</FatText>
        <FatText>
          Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”).
          Persian cucumbers, in addition to aforementioned “normal” cucumbers.
          Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call
          pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit.
          Fruit of the Loom. Fruits of our labor (this website). Sorrel.
          Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom
          tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear,
          we’re vendors of organic produce, but if you asked us to describe what
          escaroles are...
        </FatText>
      </div>
    </Container>
  );
};
const FatText = styled.p`
  font-family:"Inter", serif;
  color:black;
  font-weight:400;
  font-size:20px;
`;
const Container = styled.div`
  max-width: 768px; /* max-w-3xl */
  margin: 0 auto; /* mx-auto */
  padding: 2rem; /* p-8 */

  h3 {
    font-size: 0.75rem; /* text-xs */
    font-weight: bold; /* font-bold */
    letter-spacing: 0.05em; /* tracking-wide */
    text-align: left; /* text-left */
    color: #4A4A4A; /* text-gray-700 */
    text-transform: uppercase; /* uppercase */
  }

  .about_product {
    margin-top: 1rem; /* mt-4 */
    font-size: 1.125rem; /* text-lg */
    text-align: left; /* text-left */
    color: #333333; /* text-gray-900 */
    line-height: 1.75; /* space-y-4 equivalent with line-height */
  }
`;
