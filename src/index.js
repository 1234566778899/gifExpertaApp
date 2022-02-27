
import { render, } from "@testing-library/react";
import GifExpertApp from "./GifExpertApp";
import './index.css';



const divRoot=document.querySelector('#root');

render(<GifExpertApp/>,divRoot);
