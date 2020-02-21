import React from "react"
import { SvgXml } from "react-native-svg"

const xml = `
<svg width="44px" height="38px" viewBox="0 0 44 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="icons-303-lines" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="user-check" transform="translate(-2.000000, -5.000000)">
            <g transform="translate(4.000000, 7.000000)">
                <circle id="Oval" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="15" cy="6" r="6"></circle>
                <path d="M15,18 C8.5778496,18 1.36980332,21.9035923 0.75,23.25 C0.24206543,24.3533936 0,27.75 0,27.75 C0,28.9901122 1.00541245,30 2.24565156,30 L27.7543484,30 C28.9945876,30 30,28.9901122 30,27.75 C30,27.75 29.7579346,24.3533936 29.25,23.25 C28.6301967,21.9035923 21.4221504,18 15,18 L15,18 Z" id="Combined-Shape" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                <circle id="Oval-2" fill="#000000" cx="32" cy="26" r="10"></circle>
                <path d="M29.4142136,23.5857864 C28.633165,22.8047379 27.366835,22.8047379 26.5857864,23.5857864 C25.8047379,24.366835 25.8047379,25.633165 26.5857864,26.4142136 L29.5857864,29.4142136 C29.9763107,29.8047379 30.4881554,30 31,30 C31.5118446,30 32.0236893,29.8047379 32.4142136,29.4142136 L37.4142136,24.4142136 C38.1952621,23.633165 38.1952621,22.366835 37.4142136,21.5857864 C36.633165,20.8047379 35.366835,20.8047379 34.5857864,21.5857864 L31,25.1715729 L29.4142136,23.5857864 Z" id="Combined-Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
            </g>
        </g>
    </g>
</svg>
`

const MyPosts = ({ size, color }) => (
  <SvgXml xml={xml} width="100%" height="100%" color={color} />
)
export default MyPosts