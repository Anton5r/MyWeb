import { useState } from 'react';
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
  MenuHeader,
  MenuDivider,
  MenuRadioGroup
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
  const [textColor, setTextColor] = useState('red');
  const [isBold, setBold] = useState(true);
  const [isItalic, setItalic] = useState(true);
  const [isUnderline, setUnderline] = useState(false);

  return (
    <>
      <Menu menuButton={<MenuButton>Menu</MenuButton>}>
        <MenuItem>New File</MenuItem>
        <MenuItem>Save</MenuItem>
        <MenuDivider />
        <MenuHeader>Text settings</MenuHeader>

        <SubMenu label="Text color">
          <MenuRadioGroup
            value={textColor}
            onRadioChange={(e) => setTextColor(e.value)}
          >
            <MenuItem type="radio" value={'red'}>
              Red
            </MenuItem>
            <MenuItem type="radio" value={'green'}>
              Green
            </MenuItem>
            <MenuItem type="radio" value={'blue'}>
              Blue
            </MenuItem>
          </MenuRadioGroup>
        </SubMenu>

        <SubMenu label="Text style">
          <MenuItem
            type="checkbox"
            checked={isBold}
            onClick={(e) => setBold(e.checked)}
          >
            Bold
          </MenuItem>
          <MenuItem
            type="checkbox"
            checked={isItalic}
            onClick={(e) => setItalic(e.checked)}
          >
            Italic
          </MenuItem>
          <MenuItem
            type="checkbox"
            checked={isUnderline}
            onClick={(e) => setUnderline(e.checked)}
          >
            Underline
          </MenuItem>
        </SubMenu>
      </Menu>

      <div
        style={{
          color: textColor,
          fontWeight: isBold ? 'bold' : 'initial',
          fontStyle: isItalic ? 'italic' : 'initial',
          textDecoration: isUnderline ? 'underline' : 'initial',
          textAlign: 'center'
        }}
      >
        Круто
      </div>
    </>
  );
}