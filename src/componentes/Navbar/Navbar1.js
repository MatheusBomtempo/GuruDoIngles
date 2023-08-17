import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { useNavigate } from "react-router-dom";
import logo from '../../imgs/logo guru 2.png';

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/venda');
  };



  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="medium"
        color="white"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Início
        </a>
      </Typography>

      <Typography
        as="li"
        variant="medium"
        color="white"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Contatos
        </a>
      </Typography>
    </ul>
  );

  const dropdownOptions = [
    'Fast Certification'
  ];

  const handleButtonClick = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 lg:px-8 lg:py-4 bg-azulao border-0 bgbg">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img src={logo} className="w-32" alt="Logo" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="relative">
              <Button
                variant=""
                size="md"
                className="hidden lg:inline-block"
                onClick={handleButtonClick}
                style={{ backgroundColor: '#C20004' }}
              >
                <span>Cursos</span>
              </Button>
              {openDropdown && (
                <ul className="absolute z-10 top-10 right-0 py-2 bg-white text-black shadow-lg rounded">
                  {dropdownOptions.map((option, index) => (
                    <li
                      key={index}
                      className="px-8 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={handleClick}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="mt-2">
            {dropdownOptions.map((option, index) => (
              <Button
                key={index}
                variant="gradient"
                size="sm"
                fullWidth
                className="mb-2"
                onClick={handleClick}
              >
                {option}
              </Button>
            ))}
          </div>
        </MobileNav>
      </Navbar>
    </>
  );
}
