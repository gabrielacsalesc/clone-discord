import styled from "styled-components";
import { Mic, Headset, Settings } from "styled-icons/material";

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50px;

  background-color: var(--gray);
`;

export const UserData = styled.div`
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    > strong {
        color: var(--white);
        font-size: 13px;
        display: block;
        
        white-space: nowrap;
        text-overflow: ellipsis; 
        overflow: hidden;
        
    }

    > span {
        color: var(--gray);
        font-size: 12px;
      
    }


`;

export const Icons = styled.div`
    display: flex;
    align-items: center;

    > svg:not(:first-child){
        margin-left: 5px;
    }
   
`;

export const MicIcon = styled(Mic)`
    width: 25px;
    height: 25px;

    color: var(--white);
    opacity: .2;
    cursor: pointer;

    transition: opacity 0.5s;
    padding: 1px;

    &:hover{
        opacity: 1;
        background-color: var(--quinary);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
        z-index: 2;
        border-radius: 20%;
    }
`;

export const HeadphoneIcon = styled(Headset)`
    width: 25px;
    height: 25px;

    color: var(--white);
    opacity: .2;
    cursor: pointer;

    transition: opacity 0.5s;
    padding: 1px;

    &:hover{
        opacity: 1;
        background-color: var(--quinary);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
        z-index: 2;
        border-radius: 20%;
    }
`;


export const SettingsIcon = styled(Settings)`
    width: 25px;
    height: 25px;

    color: var(--white);
    opacity: .2;
    cursor: pointer;

    transition: opacity 0.5s;
    padding: 1px;

    

    &:hover{
        opacity: 1;
        background-color: var(--quinary);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
        z-index: 2;
        border-radius: 20%;
    }
`;
