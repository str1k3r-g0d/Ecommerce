import styled, { css } from 'styled-components';


const buttonStyles = css `

    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const InvertedButtonStyles = css `

    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }

`;

const GoogleSignInStyles = css `

    background-color: #4285f4;
    color: white; 
    border: 1px solid #4285f4;


    &:hover {
        background-color: white;
        color: #4285f4;
        border: 1px solid #4285f4;
    }

`;

const GetButtonStyles = props => {
    if(props.IsGoogleSignIn) {
        return GoogleSignInStyles;
    }

    return props.inverted ? InvertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button `

min-width: 150px;
   
   width: auto;
   min-height: 50px;
   height: auto;
   letter-spacing: 0.5px;
   line-height: 20px;
   padding: 0 35px 0 35px;
   text-transform: uppercase;
   font-family: 'Josefin Sans', sans-serif;
   font-weight: bolder;
   cursor: pointer;
   margin-right: 10px;
   margin-bottom: 10px;
   border-radius: 2px;
   padding-top: 5px;
   display: flex;
   justify-content: center;

   ${GetButtonStyles}
`