import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, List, Space, Typography, Avatar } from "antd";
import { useState } from "react";

const mockComments = [
    "The Aloevera soap is fantastic! Really helps with my skin.",
    "I love the Herb Candles; they have a calming effect!",
    "The Honey soap smells amazing and feels great on my skin.",
    "Handmade soap always has a personal touch; it’s wonderful!",
    "Herbal oil is perfect for relaxation and wellness!",
    "Products are really good",
    "I absolutely love the products!",
    "The Aloevera soap is fantastic! Really helps with my skin.",
    "I love the Herb Candles; they have a calming effect!",
    "The Honey soap smells amazing and feels great on my skin.",
];

const mockOrders = [
    "Honey soap has been ordered!",
    "Aloevera soap has been ordered!",
    "Herb Candles has been ordered!",
    "Aloevera soap has been ordered!",
    "Honey soap has been ordered!",
    "Handmade soap has been ordered!",
    "Herbal oil has been ordered!",
    "Herb Candles has been ordered!",
    "Aloevera soap has been ordered!",
    "Honey soap has been ordered!",
    "Handmade soap has been ordered!",
    "Herbal oil has been ordered!",
    "Herb Candles has been ordered!",
];

function AppHeader() {
    // Use mock data directly
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    return (
        <div className="AppHeader" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', borderBottom: '1px solid #e8e8e8' }}>
            <Avatar
                src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
                size={40}
                style={{ marginRight: '16px' }}
            />
            <Typography.Title level={3} style={{ margin: 0 }}>
                Admin Dashboard
            </Typography.Title>
            <Space>
                <Badge count={mockComments.length} dot>
                    <MailOutlined
                        style={{ fontSize: 24, cursor: 'pointer' }}
                        onClick={() => setCommentsOpen(true)}
                    />
                </Badge>
                <Badge count={mockOrders.length}>
                    <BellFilled
                        style={{ fontSize: 24, cursor: 'pointer' }}
                        onClick={() => setNotificationsOpen(true)}
                    />
                </Badge>
            </Space>
            <Drawer
                title="Reviews"
                open={commentsOpen}
                onClose={() => setCommentsOpen(false)}
                maskClosable
            >
                <List
                    dataSource={mockComments}
                    renderItem={(item) => (
                        <List.Item>{item}</List.Item>
                    )}
                />
            </Drawer>
            <Drawer
                title="Orders"
                open={notificationsOpen}
                onClose={() => setNotificationsOpen(false)}
                maskClosable
            >
                <List
                    dataSource={mockOrders}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text>{item}</Typography.Text>
                        </List.Item>
                    )}
                />
            </Drawer>
        </div>
    );
}

export default AppHeader;
