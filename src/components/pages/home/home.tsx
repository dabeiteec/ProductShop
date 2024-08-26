import { Subtitle } from './tsx/subtitle';
import { ImgContainer } from './tsx/img-container';
import { TextContainer } from './tsx/text-container';

export const HomePage:React.FC=()=> {
    return (
      <main>
        <Subtitle/>
        <ImgContainer/>
        <TextContainer/>
      </main>
    );
  }