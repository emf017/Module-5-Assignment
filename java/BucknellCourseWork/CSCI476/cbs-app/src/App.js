import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { Routes, Route } from 'react-router-dom';

// Importing Icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import CreateIcon from '@mui/icons-material/Create';
import ConstructionIcon from '@mui/icons-material/Construction';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import LinkIcon from '@mui/icons-material/Link';
import ListIcon from '@mui/icons-material/List';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import UndoIcon from '@mui/icons-material/Undo';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';

//Pages
import Home from './Pages/Home';
import Authoring from './Pages/Authoring';
import Tools from './Pages/Tools';


const App = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem
            icon={<MenuRoundedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
          >

          </MenuItem>
          <MenuItem icon={<HomeIcon />}> Home </MenuItem>

          <SubMenu label="Tools" icon={<ConstructionIcon />}>
            <MenuItem icon={<LinkIcon />}> Smart Link </MenuItem>
            <MenuItem icon={<ListIcon />}>Keyword Index</MenuItem>
            <MenuItem icon={<GroupIcon />}>User Groups</MenuItem>
            <MenuItem icon={<PersonIcon />}>User Roles</MenuItem>
          </SubMenu>

          <SubMenu label="Reports" icon={<SummarizeIcon />}>
          <MenuItem icon={<FilePresentIcon />}>
            Document Status Summary
           </MenuItem>
          </SubMenu>

          <SubMenu label="Authoring" icon={<CreateIcon />}>
            <MenuItem icon={<FormatAlignJustifyIcon />}> Auto-Form </MenuItem>
            <MenuItem icon={<ContentCopyIcon />}> Copy </MenuItem>
            <MenuItem icon={<ContentPasteIcon />}> Paste </MenuItem>
            <MenuItem icon={<DeleteIcon />}> Delete </MenuItem>
            <MenuItem icon={<UndoIcon />}> Undo </MenuItem>
            <MenuItem icon={<DescriptionIcon />}> Coversheet </MenuItem>
          </SubMenu>

          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}> Notifications </MenuItem>
          </SubMenu>

          <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authoring" element={<Authoring />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
