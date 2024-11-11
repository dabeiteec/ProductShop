import { Subtitle } from '../widgets/pages/home/subtitle';
import { ImgContainer } from '../widgets/pages/home/img-container';
import { TextContainer } from '../widgets/pages/home/text-container';

export const HomePage:React.FC=()=> {
    return (
      <main>
        <Subtitle/>
        <ImgContainer/>
        <TextContainer/>
      </main>
    );
  }