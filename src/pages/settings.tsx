import {
  UserGroupIcon,
  UserIcon,
  CurrencyYenIcon,
  KeyIcon,
  RssIcon,
} from '@heroicons/react/24/outline'

import {
  TabList,
  Tab,
  Card,
  ProgressBar,
  Flex,
  Text,
  Metric,
  Title,
  Subtitle,
  Bold,
  Italic,
  BadgeDelta,
  CategoryBar,
  Grid,
  Button,
} from '@tremor/react'

import { useState } from 'react'

const LocationA = [
  {
    name: 'Product A',
    percentage: 38,
    stat: '$ 100,838',
  },
  {
    name: 'Product B',
    percentage: 34,
    stat: '$ 90,224',
  },
]

const LocationB = [
  {
    name: 'Product Z',
    percentage: 82,
    stat: '$ 108,799',
  },
  {
    name: 'Product E',
    percentage: 10,
    stat: '$ 13,268',
  },
]

const categories = [
  {
    title: '总收入',
    metric: '¥ 456,00',
  },
  {
    title: '今日收入',
    metric: '¥ 89,123',
  },
  {
    title: '总订单',
    metric: '231',
  },
  {
    title: '今日订单',
    metric: '13',
  },
]

function PayCard() {
  return (
    <Card className="max-w-md ">
      <Card>
        <Flex>
          <div className=" justify-start">
            <Title className="truncate">SmartChat微信收款</Title>
            {/* <Text className="truncate">hahha</Text> */}

            <BadgeDelta deltaType="moderateIncrease" className='mt-5'>13.1%</BadgeDelta>
          </div>

          <img
            className="w-24 h-24"
            src="https://api.zskcloud.xyz/enQrcode?url=wxp://f2f0-UA3G5iMFwTReqAXMCeet4n5RDwGDmUmb6sDoRHtFnc"
            alt=""
          />
        </Flex>
        <Flex
          justifyContent="start"
          alignItems="baseline"
          className="space-x-1"
        >
          {/* <Metric>65</Metric>
          <Text>/100</Text> */}
        </Flex>
        {/* <CategoryBar
          categoryPercentageValues={[10, 25, 45, 20]}
          colors={['emerald', 'yellow', 'orange', 'red']}
          percentageValue={65}
          tooltip="65%"
          className="mt-2"
        /> */}
      </Card>
      <Grid numColsSm={2} className="mt-4 gap-4">
        {categories.map((item) => (
          <Card key={item.title}>
            <Metric className="mt-2 truncate">{item.metric}</Metric>
            <Text>{item.title}</Text>
          </Card>
        ))}
      </Grid>
    </Card>
  )
}

export default function Settings() {
  const [value, setValue] = useState('1')
  return (
    <main className="px-16 py-10 flex-1 overscroll-auto overflow-auto">
      <Card>
        <TabList value={value} onValueChange={setValue} defaultValue="1">
          <Tab value="1" text="支付设置" icon={CurrencyYenIcon} />
          <Tab value="2" text="管理员设置" icon={UserGroupIcon} />
          <Tab value="3" text="监控端设置" icon={RssIcon} />
          <Tab value="4" text="API设置" icon={KeyIcon} />
        </TabList>

        {value == '1' && (
          <div className="flex flex-col h-full ">
            <div className="mt-6">
              <Flex>
                <Title>微信设置</Title>
                <Button size="xs" onClick={() => console.log('clicked')}>
                  添加支付二维码
                </Button>
              </Flex>
              <Flex justifyContent={'around'} className="mt-5 space-x-10">
                <PayCard></PayCard>
                {/* <PayCard></PayCard> */}
                {/* <PayCard></PayCard> */}
              </Flex>
            </div>
            <div className="mt-6">
              <Flex>
                <Title>支付宝设置</Title>
                <Button size="xs" onClick={() => console.log('clicked')}>
                  添加支付二维码
                </Button>
              </Flex>
              <Flex justifyContent={'around'} className="mt-5 space-x-10">
                {/* <PayCard></PayCard>
                <PayCard></PayCard>
                <PayCard></PayCard> */}
              </Flex>
            </div>
          </div>
        )}

        {value == '2' && (
          <div className="mt-6">
            <Flex>
              <Title>微信设置</Title>
              <Button size="xs" onClick={() => console.log('clicked')}>
                添加支付二维码
              </Button>
            </Flex>
            <Flex justifyContent={'around'} className="mt-5 space-x-10">
              <PayCard></PayCard>
              <PayCard></PayCard>
              <PayCard></PayCard>
            </Flex>
          </div>
        )}

        {value == '3' && (
          <div className="mt-6">
            {LocationA.map((item) => (
              <div className="mt-4" key={item.name}>
                <Flex className="mt-4">
                  <Text>{item.name}</Text>
                  <Flex className="space-x-2" justifyContent="end">
                    <Text> {item.stat} </Text>
                    <Text>
                      {' '}
                      ({item.percentage}
                      %)
                    </Text>
                  </Flex>
                </Flex>
                <ProgressBar
                  percentageValue={item.percentage}
                  className="mt-2"
                />
              </div>
            ))}
          </div>
        )}
      </Card>
    </main>
  )
}
