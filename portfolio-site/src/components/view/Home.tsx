import { ReactNode } from "react";

import tw from "tailwind-styled-components";

const Container = tw.div([
    "flex",
    "items-center",
    "justify-center",
    "flex-col",
    "w-full",
    "bg-grey-900",
]);

export const Home = () => {
    return(
    <Container>
      <figure className="w-1/2 md:flex bg-slate-50 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Perspiciatis, autem vel accusantium obcaecati vitae sit 
              ut ratione sint animi maiores veritatis atque ea tempore 
              est alias impedit fuga, illo soluta.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </Container>
    );
}