import {
  Card,
  Title,
  Text,
  Tab,
  Metric,
  Grid,
  List,
  ListItem,
  Icon,
  Bold,
  Flex,
  Button,
  Color,
  AreaChart,
  BadgeDelta,
} from '@tremor/react'
import {
  ShoppingBagIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline'

import { useState } from 'react'

const Logo = () => (
  <div className="flex flex-shrink-0 items-center">
    <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
      Smart Chat
    </span>
    <span className="bg-[#9750dd] text-white rounded ml-1 px-1 py-1 text-sm font-bold leading-none">
      beta
    </span>
  </div>
)
type TransactionCategory = {
  name: string
  icon: any
  color: Color
  time: string
  amount: string
}

const orders: TransactionCategory[] = [
  {
    name: '基础订阅1个月',
    icon: ShoppingBagIcon,
    color: 'rose',
    time: '09:41:12',

    amount: '¥ 14.99',
  },
  {
    name: '高级订阅1个月',
    icon: ShoppingBagIcon,
    color: 'emerald',
    time: '12:35:12',

    amount: '¥ 29.99',
  },
  {
    name: '团队订阅1个月',
    icon: ShoppingBagIcon,
    color: 'pink',
    time: '21:14:8',

    amount: '¥ 1999.99',
  },
]
const chartdata = [
  {
    date: '4-25',
    订单金额: 2890,
    实际收入: 2338,
  },
  {
    date: '4-26',
    订单金额: 2756,
    实际收入: 2103,
  },
  {
    date: '4-27',
    订单金额: 3322,
    实际收入: 2194,
  },
  {
    date: '4-28',
    订单金额: 3470,
    实际收入: 2108,
  },
  {
    date: '4-29',
    订单金额: 3475,
    实际收入: 1812,
  },
  {
    date: '4-30',
    订单金额: 3129,
    实际收入: 1726,
  },
]
const dataFormatter = (number: number) => {
  return '¥ ' + Intl.NumberFormat('us').format(number).toString()
}

export default function Dashboard() {
  return (
    <main className="px-16">
      <div className="flex flex-row justify-between mt-10">
        <Grid
          numColsMd={1}
          numColsLg={2}
          className="flex-1 gap-11  h-1/5 max-w-4xl"
        >
          <Card className="bg-gradient-to-r from-primary-clear to-primary-dull">
            {/* Placeholder to set height */}
            {/* <div className="h-28" /> */}
            <Text className="font-medium text-xl text-primary-visible">
              总金额
            </Text>
            <Metric className="mt-6 text-primary-visible">¥ 13,123</Metric>
          </Card>

          <Card className="bg-gradient-to-r from-primary-clear to-primary-dull">
            <Flex alignItems="start">
              <Text className="font-medium text-xl  text-primary-visible">
                今日收入
              </Text>
              <BadgeDelta deltaType={'moderateIncrease'}>10.9%</BadgeDelta>
            </Flex>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="truncate space-x-3"
            >
              <Metric className="mt-6 text-primary-visible">¥ 240.99</Metric>
              <Text className="truncate">from ¥ 219.99</Text>
            </Flex>
          </Card>

          <Card className="bg-gradient-to-r from-primary-clear to-primary-dull">
            {/* Placeholder to set height */}
            <Text className="font-medium text-xl text-primary-visible">
              总订单
            </Text>
            <Metric className="mt-6 text-primary-visible">9810</Metric>
          </Card>

          <Card className="bg-gradient-to-r from-primary-clear to-primary-dull">
            <Flex alignItems="start">
              <Text className="font-medium text-xl  text-primary-visible">
                今日订单
              </Text>
              <BadgeDelta deltaType={'moderateIncrease'}>29.9%</BadgeDelta>
            </Flex>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="truncate space-x-3"
            >
              <Metric className="mt-6 text-primary-visible">69</Metric>
              <Text className="truncate">from 46</Text>
            </Flex>
          </Card>
        </Grid>

        <Card className="flex-auto rounded-xl bg-bg-focus p-6 shadow-inner max-w-xl">
          <Title className="text-clear">最近订单</Title>
          <Text className="text-dull">2023-05-01</Text>
          <List className="mt-4">
            {orders.map((order) => (
              <ListItem key={order.name}>
                <Flex justifyContent="start" className=" space-x-4">
                  <Icon
                    className="text-primary-dull"
                    variant="light"
                    icon={order.icon}
                    size="md"
                    color={order.color}
                  />
                  <div className="truncate">
                    <Text className="truncate">
                      <Bold className="text-clear">{order.name}</Bold>
                    </Text>
                    <Text className="text-dull">{order.time}</Text>
                  </div>
                </Flex>
                <Text className="text-clear">{order.amount}</Text>
              </ListItem>
            ))}
          </List>
          <Button
            size="sm"
            variant="light"
            icon={ArrowLongRightIcon}
            iconPosition="right"
            className="mt-4"
          >
            View details
          </Button>
        </Card>
      </div>

      <div className="mt-16 bg-bg-focus">
        <Card>
          <Title>最近收入</Title>
          <AreaChart
            className="h-72 mt-4"
            data={chartdata}
            index="date"
            categories={['订单金额', '实际收入']}
            colors={['indigo', 'cyan']}
            valueFormatter={dataFormatter}
            // showGridLines={false}
          />
        </Card>
      </div>
    </main>
  )
}
