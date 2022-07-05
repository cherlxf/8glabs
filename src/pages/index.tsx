/*
 * @Author: liaoxf01@mingyuanyun.com
 * @Description: file description
 * @Date: 2022-07-05 10:07:36
 * @LastEditors: liaoxf01@mingyuanyun.com
 */

import React from 'react';
import { Tabs } from 'antd';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import styles from './index.less';

const { TabPane } = Tabs;

const IndexPage: React.FC = () => {
  // var options = {
  //   modules: {
  //     toolbar: '#toolbar',
  //   },
  //   placeholder: 'Compose an epic...',
  //   theme: 'snow',
  // };
  // var editor = new Quill('#editor', options);
  var toolbarOptions = [
    'bold',
    'italic',
    'underline',
    'strike',
    'link',
    'image',
  ];

  var editor = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions,
    },
    theme: 'snow',
  });

  const handleTabOnChange = () => {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Manage post</div>
      <div className={styles.content}>
        <Tabs defaultActiveKey="1" onChange={handleTabOnChange}>
          <TabPane tab="Settings" key="settings">
            <div id="toolbar"></div>
            <div
              id="editor"
              style={{ height: 400, border: '1px solid #eee' }}
            ></div>
          </TabPane>
          <TabPane tab="Posts" key="post">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default IndexPage;
