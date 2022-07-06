/*
 * @Author: liaoxf01@mingyuanyun.com
 * @Description: file description
 * @Date: 2022-07-05 10:07:36
 * @LastEditors: liaoxf01@mingyuanyun.com
 */

import React, { useState, useEffect, memo } from 'react';
import { Tabs } from 'antd';
import Editor from './editor';

import styles from './index.less';

const { TabPane } = Tabs;

const IndexPage: React.FC = () => {
  const [tab, setTab] = useState<string>('settings');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>('Hello, This is header');
  const [postContent, setPostContent] = useState<string>('post content');

  useEffect(() => {
    if (tab === 'settings') {
      setIsEdit(false);
    }
  }, [tab]);

  const handleTabOnChange = (value: string) => {
    setTab(value);
  };

  const handleEditBtnClick = () => {
    setIsEdit(true);
  };

  const handlePostConfirm = (editValue: any) => {
    setPostTitle(editValue.title);
    setPostContent(editValue.content);
    setIsEdit(false);
  };

  const handleEditCancel = () => {
    setIsEdit(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Manage post</div>
      <div className={styles.content}>
        <Tabs
          defaultActiveKey="settings"
          destroyInactiveTabPane
          onChange={handleTabOnChange}
        >
          <TabPane tab="Settings" key="settings">
            settings
          </TabPane>
          <TabPane tab="Posts" key="posts">
            <div className={styles.postsWrapper}>
              {isEdit && (
                <Editor
                  onConfirm={handlePostConfirm}
                  onCancel={handleEditCancel}
                />
              )}
              {!isEdit && (
                <div className={styles.postContainer}>
                  <div className={styles.postHeader}>
                    <span className={styles.postHeader__title}>
                      {postTitle}
                    </span>
                    <span className={styles.postHeader__line}></span>
                    <span
                      className={styles.editBtn}
                      onClick={handleEditBtnClick}
                    >
                      Edit
                    </span>
                  </div>
                  <div className={styles.postContent}>{postContent}</div>
                </div>
              )}
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default memo(IndexPage);
