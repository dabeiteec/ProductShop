import { Subtitle } from '../3_widgets/pages/home/subtitle';
import { ImgContainer } from '../3_widgets/pages/home/img-container';
import { TextContainer } from '../3_widgets/pages/home/text-container';

export const HomePage:React.FC=()=> {
    return (
      <main>
        <Subtitle/>
        <ImgContainer/>
        <TextContainer/>
      </main>
    );
  }