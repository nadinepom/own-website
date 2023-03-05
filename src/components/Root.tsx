import React from 'react';
import {
	Box,
	useColorMode,
	Heading,
	HStack,
	Text,
	Link,
	 VStack,
	ScrollView,
} from 'native-base';
import { Floaters } from './Floaters';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NativeBaseIcon from "./NativeBaseIcon";

export const Root = ({
	children,
	navigation,
	title,
	doclink,
	navigateTo,
	_status,
	_hStack,
	...props
}: any) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const safeArea = useSafeAreaInsets();

	return (
		<Box  _dark={{bg: "blueGray.900"}}
					_light={{bg: "blueGray.50"}} width={'100%'}>

			<Box
				{...props}
				flex={1}
				px={4}
				mx="auto"
				pt={navigation ? '70px' : 0}
				w={{ base: '100%', md: '768px', lg: '1000px', xl: '1080px' }}
				// style={{
				// 	backdropFilter: 'blur(10px)',
				// }}
			>
				<HStack
					left={0}
					top={0}
					right={0}
					px={4}
					zIndex={-1}
					{..._hStack}
				>
					<HStack py={2}
					alignItems="center"
					w="100%"
					>

								<Heading
									color={colorMode == 'dark' ? 'white' : 'gray.800'}
									isTruncated
								>
									{title ? title : 'NativeBase'}
								</Heading>
					</HStack>
				</HStack>
				<ScrollView
					contentContainerStyle={{ width: '100%' }}
					showsVerticalScrollIndicator={true}>
				  <VStack space={5} alignItems="center">
				    <NativeBaseIcon/>
				    <Heading size="lg">Welcome to NativeBase</Heading>
				    <HStack space={2} alignItems="center">
				      <Text>Edit</Text>
				      <Box
				          _web={{
				            _text: {
				              fontFamily: "monospace",
				              fontSize: "sm",
				            },
				          }}
				          px={2}
				          py={1}
				          _dark={{bg: "blueGray.800"}}
				          _light={{bg: "blueGray.200"}}
				      >
				        App.js
				      </Box>
				      <Text>and save to reload.</Text>
				    </HStack>
				    <Link href="https://docs.nativebase.io" isExternal>
				      <Text color="primary.500" underline fontSize={"xl"}>
				        Learn NativeBase
				      </Text>
				    </Link>
					  <Text>HALLO</Text>
					  <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text> <Text>HALLO</Text>
				  </VStack>
				</ScrollView>
			</Box>
			<Floaters />
		</Box>
	);
};
