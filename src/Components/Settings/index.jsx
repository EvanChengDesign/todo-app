import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../context/Setting';
import { Paper, Group, Switch, NumberInput, TextInput, Button, Title, Text } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import './settings.scss';

const Settings = () => {
  const { displaySettings, setDisplaySettings } = useContext(SettingsContext);
  const [showCompleted, setShowCompleted] = useState(displaySettings.hideCompleted);
  const [itemsPerPage, setItemsPerPage] = useState(displaySettings.itemsPerPage);
  const [sortWord, setSortWord] = useState(displaySettings.sortWord);
  const [updatedSettings, setUpdatedSettings] = useState(null);

  const handleSubmit = () => {
    setDisplaySettings({
      hideCompleted: showCompleted,
      itemsPerPage,
      sortWord,
    });
    setUpdatedSettings({ showCompleted, itemsPerPage, sortWord });
  };

  return (
    <Paper shadow="xs" padding="md" className="settings">
      <Group position="apart" align="center">
        <Title order={2}>
          <IconSettings /> Manage Settings
        </Title>
      </Group>
      <Group direction="column" spacing="lg" align="start">
        <Switch
          label="Hide Completed ToDos"
          checked={showCompleted}
          onChange={(event) => setShowCompleted(event.currentTarget.checked)}
        />
        <NumberInput
          label="Items Per Page"
          value={itemsPerPage}
          onChange={(value) => setItemsPerPage(value)}
          min={1}
          max={10}
        />
        <TextInput
          label="Sort Keyword"
          value={sortWord}
          onChange={(event) => setSortWord(event.currentTarget.value)}
        />
        <Button onClick={handleSubmit} style={{ backgroundColor: 'rgb(56, 117, 240)' }}>
          Update Settings
        </Button>
        {updatedSettings && (
          <Paper shadow="xs" padding="md">
            <Text>Updated Settings:</Text>
            <Text>Hide Completed ToDos: {updatedSettings.showCompleted ? 'Yes' : 'No'}</Text>
            <Text>Items Per Page: {updatedSettings.itemsPerPage}</Text>
            <Text>Sort Keyword: {updatedSettings.sortWord}</Text>
          </Paper>
        )}
      </Group>
    </Paper>
  );
};

export default Settings;