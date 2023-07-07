import React, { useEffect, useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import {
  AiOutlineMenu,
  AiFillCaretRight,
  AiFillPauseCircle,
} from 'react-icons/ai';
import { useWindowSize } from 'rooks';
// import logo from '../../components/navBar/DevD (4).gif';

import theme from '~/src/theme';
import NavModal from './NavModal';
import CONFIG from '../../configs';
import matrixGif from '../../components/navBar/stock_back_low.gif'; 
// import { Web3Context } from '../../web3/Web3Provider.js';
// import {  FiSettings } from 'react-icons/fi';
// import songbirdLogo from '../../assets/songbird-logo.png';
// import flareLogo from '../../assets/flarelogo.png';
import Swal from 'sweetalert2';

const { navTitle } = CONFIG;


const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: ${(props) => props.windowWidth - 0}px;
  margin-left: px;
  height: 80px;
  z-index: 1;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${(props) => props.theme.colors.primary}; */
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${(props) => props.theme.colors.light};
  border-image-source: ${(props) =>
    `linear-gradient(to left, transparent, ${props.theme.colors.primary}, transparent)`};
  // background-image: url(${matrixGif}); /* Set the background image */
  background-size: fill; /* Adjust the image size to cover the container */
  background-repeat: repeat; /* Prevent the image from repeating */

  @media (max-width: 768px) {
    font-size: 15px;
    
   
  }
`;


const MenuButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80px;
  margin-right:50px;
  border: 1px none;
  justify-content: center;
  border-right-width: 0px;
  background-color: transparent;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const PlayButton = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

const StyledDiv = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #007BFF;
  background-color: rgba(255, 255, 255, 0.6); /* Semi-transparent white background */
  padding: 10px 20px;
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: Arial, sans-serif;
  transition: transform 0.3s;
  /* 3D text effect */
  text-shadow: 1px 1px 0 #fff, 
               2px 2px 0 #fff, 
               3px 3px 0 #fff,
               4px 4px 0 #ccc, 
               5px 5px 0 #ccc, 
               6px 6px 0 #ccc,
               7px 7px 0 #bbb, 
               8px 8px 0 #bbb, 
               9px 9px 0 #bbb;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  perspective: 1000px;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 15px;
    height: 30px
    background-color: rgba(255, 255, 255, 0.6); /* Keep the semi-transparent background */
    padding: 8px 16px;
    transform: none;
    text-shadow: none;
  }
`;



const LogoContainer = styled.div`
  position: absolute;
  right: 88.7%;
  margin-top: 205px;
  transform: translateX(-50%);
`;

// const LogoImage = styled.img`
//   height: 150px;
// `;


// const NetworkSelect = styled.select`
//   color: #ffffff;
//   background-color: #252525;
//   border: none;
//   margin-right: 10px;
//   padding: 10px;
//   border-radius: 5px;
//   font-size: 16px;
//   outline: none;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #333333;
//   }

//   &:focus {
//     background-color: #444444;
//   }
// `;

// const DisconnectButton = styled.button`
//   background: linear-gradient(135deg, blue, purple);
//   color: #ffffff;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   font-size: 16px;
//   outline: none;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background: linear-gradient(135deg, purple, blue);
//   }
// `;

const MintButton = styled.button`
  background: linear-gradient(135deg, blue, purple);
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, purple, blue);
  }
`;



// const AccountAddress = styled.span`
//   color: #ffffff;
//   margin-right: 10px;
// `;

const NavBar = () => {
  // const { web3,contract } = useContext(Web3Context);
  // const [currentNetworkId, setCurrentNetworkId] = useState('');
  // const [selectedNetwork, setSelectedNetwork] = useState(null);
  // const [account, setAccount] = useState('');
  // const [isConnected, setIsConnected] = useState(false); // New state for connection status

  const [isOpen, setIsOpen] = useState(false);
  const { innerWidth } = useWindowSize();
  const [windowWidth, setWindowWidth] = useState(innerWidth);
  const [playAudio, setPlayingAudio] = useState(true);
  const audio = useRef();


  let userinteraction = 0;

  // const handleMint = async () => {
  //   if (!web3) {
  //     console.log("Web3 is not available.");
  //     return;
  //   }

  //   try {
  //     const accounts = await web3.eth.getAccounts();
  //     await contract.methods.mint(mintAmount).send({from: accounts[0]});
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  const handleMint = async () => {
    const imageUrl = `https://source.unsplash.com/1600x900/?psychedelic?${Date.now()}`;

    Swal.fire({
      title: 'Congratulations!',
      text: 'Your NFT has been minted successfully.',
      imageUrl: imageUrl,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 5000,  // 5 seconds timer, auto-closes after this time.
      timerProgressBar: true,
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  };


  // const handleNetworkChange = async (e) => {
  //   const networkId = parseInt(e.target.value, 10);
  //   if (web3 && web3.currentProvider.isMetaMask) {
  //     try {
  //       await window.ethereum.request({
  //         method: 'wallet_switchEthereumChain',
  //         params: [{ chainId: `0x${networkId.toString(16)}` }],
  //       });
  //       if (networkId === 19) {
  //         setSelectedNetwork(songbirdLogo);
  //       } else if (networkId === 14) {
  //         setSelectedNetwork(flareLogo);
  //       } else if (networkId === 31337) {
  //         setSelectedNetwork(null);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };
  

  // const handleConnectionToggle = async () => {
  //   if (web3 && web3.currentProvider.isMetaMask) {
  //     try {
  //       if (isConnected) {
          
  //          // Connect to the network
  //          await window.ethereum.request({
  //           method: 'eth_requestAccounts',
  //         });
  //         setIsConnected(false);
  //       } else {
         
  //         // Disconnect from the network
  //         await window.ethereum.request({
  //           method: 'wallet_requestPermissions',
  //           params: [{ eth_accounts: {} }],
  //         });
  //         setIsConnected(true);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };
  

  // useEffect(() => {
  //   const getCurrentNetworkId = async () => {
  //     if (web3 && web3.currentProvider.isMetaMask) {
  //       try {
  //         const networkId = await web3.eth.net.getId();
  //         setCurrentNetworkId(networkId.toString());
  //         if (networkId === 19) {
  //           setSelectedNetwork(songbirdLogo);
  //         } else if (networkId === 14) {
  //           setSelectedNetwork(flareLogo);
  //         } else if (networkId === 31337) {
  //           setSelectedNetwork(null);
  //         }

  //         const accounts = await web3.eth.getAccounts();
  //         setAccount(accounts[0]);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };

  //   getCurrentNetworkId();
  // }, [web3]);



  useEffect(() => {
    if (!audio.current) {
      audio.current = new Audio('audio/music.mp3');
      audio.current.loop = true;

      document.addEventListener('click', () => {
        if (userinteraction) return;
        userinteraction++;
        audio.current.play();
        setPlayingAudio(!audio.current.paused);
      });
    }
  }, []);

  useEffect(() => {
    setWindowWidth(innerWidth);
  }, [innerWidth]);

  return (
    <CSSTransitionGroup
  transitionName='example'
  transitionAppearTimeout={500}
  transitionEnterTimeout={500} // add this
  transitionLeaveTimeout={500} // and possibly this
  transitionAppear={true}
  transitionEnter={true}
  transitionLeave={true}
>

      <NavModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      <MainContainer windowWidth={windowWidth}>
        <PlayButton
          onClick={() => {
            if (audio.current.paused) {
              audio.current.play();
            } else {
              audio.current.pause();
            }
  
            setPlayingAudio(!audio.current.paused);
          }}
        >
          {!playAudio ? (
            <AiFillCaretRight color={theme.colors.primary} size={30} />
          ) : (
            <AiFillPauseCircle color={theme.colors.primary} size={30} />
          )}
        </PlayButton>
        <MintButton onClick={handleMint}>Mint</MintButton>

    
{/* 
<DisconnectButton type="button" onClick={handleConnectionToggle}>
  {isConnected ? 'Disconnect' : 'Connect'}
</DisconnectButton> */}

{/* <div>
        <NetworkSelect value={currentNetworkId} onChange={handleNetworkChange}>
          <option value="14">Flare</option>
          <option value="19">Songbird</option>
          <option value="31337">Localhost</option>
        </NetworkSelect>
        {selectedNetwork && <LogoImage src={selectedNetwork} alt="Network logo" />}
      </div>  
{isConnected && <AccountAddress>{account}</AccountAddress>} */}
        <StyledDiv>{navTitle}</StyledDiv>
        <LogoContainer>
          {/* <LogoImage src={logo} alt="Logo" /> */}
        </LogoContainer>
        <MenuButton onClick={() => setIsOpen(true)}>
          <AiOutlineMenu color={theme.colors.primary} size={30} />
        </MenuButton>
      </MainContainer>
    </CSSTransitionGroup>
  );
};

export default NavBar;
