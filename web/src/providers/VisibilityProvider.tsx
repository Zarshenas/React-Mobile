import React, {Context, createContext, useContext, useEffect, useState} from "react";
import {useNuiEvent} from "../hooks/useNuiEvent";
import {fetchNui} from "../utils/fetchNui";

import styled from "styled-components";
interface Div {
  isVisible:boolean
}
const StyledDiv = styled.div<Div>`
  height: 100%;
  /* visibility:${props=>props.isVisible ? 'visible' : 'hidden'}; */
  transition: all 1s ease;
  transform: ${props=>props.isVisible ? "translateY(0px)" : 'translateY(100%)'};
`;

export const VisibilityCtx = createContext<VisibilityProviderValue | null>(null)

interface VisibilityProviderValue {
  setVisible: (visible: boolean) => void
  visible: boolean
}


// This should be mounted at the top level of your application, it is currently set to
// apply a CSS visibility value. If this is non-performant, this should be customized.
export const VisibilityProvider: React.FC = ({children}) => {
  const [visible, setVisible] = useState(false)

  useNuiEvent<boolean>('setVisible', setVisible)

  // Handle pressing escape/backspace
  useEffect(() => {
    // Only attach listener when we are visible
    if (!visible) return;

    const keyHandler = (e: KeyboardEvent) => {
      if (["Escape"].includes(e.code)) {
        fetchNui('hideFrame')
      }
    }

    window.addEventListener("keydown", keyHandler)

    return () => window.removeEventListener("keydown", keyHandler)
  }, [visible])

  return (
    <VisibilityCtx.Provider
      value={{
        visible,
        setVisible
      }}
    >
    <StyledDiv isVisible={visible}>
    {/* <div style={{ visibility: true ? 'visible' : 'hidden', height: '100%'}}> */}
      {children}
    </StyledDiv>
  </VisibilityCtx.Provider>)
}

export const useVisibility = () => useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>)
