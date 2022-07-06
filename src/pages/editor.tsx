/*
 * @Author: liaoxf01@mingyuanyun.com
 * @Description: file description
 * @Date: 2022-07-06 15:08:24
 * @LastEditors: liaoxf01@mingyuanyun.com
 */

import React, { useState, useMemo, memo, useEffect } from 'react';
import { Input } from 'antd';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styles from './index.less';

interface IProps {
  onConfirm: (value: any) => void;
  onCancel: (isEdit: boolean) => void;
}

const Editor: React.FC<IProps> = (props) => {
  const { onConfirm, onCancel } = props;

  const [editValue, setEditValue] = useState<any>({
    title: '',
    content: '',
  });
  const [editorInstance, setEditorInstance] = useState<any>();

  const toolbarOptions = [
    { header: 1 },
    { header: 2 },
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    { list: 'ordered' },
    { list: 'bullet' },
    { size: ['small', false, 'large', 'huge'] },
    // { script: 'sub' },
    // { script: 'super' },
    // { indent: '-1' },
    // { indent: '+1' },
    // { direction: 'rtl' },
    { header: [1, 2, 3, 4, 5, 6, false] },
    { font: [] },
    'link',
    'image',
    // 'clean',
  ];

  // let editor = useMemo(() => {
  //   const quillInstance = new Quill('#editor', {
  //     modules: {
  //       toolbar: toolbarOptions,
  //     },
  //     theme: 'snow',
  //   });

  //   return quillInstance;
  // }, [visible]);

  useEffect(() => {
    let editor = new Quill('#editor', {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: 'snow',
    });
    setEditorInstance(editor)
  }, []);

  const handlePostTitleChange = (e: any) => {
    setEditValue({
      ...editValue,
      title: e.target.value,
    });
  };

  const handlePost = () => {
    handlePostCancel();
    onConfirm &&
      onConfirm({
        title: editValue.title,
        content: editorInstance?.getText ? editorInstance.getText() : '',
      });
  };

  const handlePostCancel = () => {
    onCancel && onCancel(false);
  };

  return (
    <div className={styles.postsEditor}>
      <div className={styles.title}>
        <Input onChange={handlePostTitleChange} />
      </div>
      <div id="editor" style={{ height: 400, border: '1px solid #eee' }}></div>
      <div className={styles.footer}>
        <div className={styles.postBtn} onClick={handlePost}>
          Post
        </div>
        <div className={styles.cancelBtn} onClick={handlePostCancel}>
          Cancel
        </div>
      </div>
    </div>
  );
};

export default memo(Editor);
