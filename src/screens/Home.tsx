import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { HStack, VStack } from 'native-base';
import { useState } from 'react';

export function Home() {
  const [groupSelected, setGroupSelected] = useState('Costas');

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <Group
          name="Costas"
          isActive={groupSelected === 'Costas'}
          onPress={() => setGroupSelected('Costas')}
        />
        <Group
          name="Peito"
          isActive={groupSelected === 'Peito'}
          onPress={() => setGroupSelected('Peito')}
        />
      </HStack>
    </VStack>
  );
}
