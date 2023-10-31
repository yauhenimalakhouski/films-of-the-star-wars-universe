import { FilmsContainer } from "@/components/Films/container";
import { FilmsSortBar } from "@/components/FilmsSortBar/component";

export default function Home() {
  return (
    <main>
      
      <div>
          <FilmsSortBar/>
          {/* <FilmsDisplayType/> */}
      </div>
      <FilmsContainer></FilmsContainer>
    </main>
  )
}
