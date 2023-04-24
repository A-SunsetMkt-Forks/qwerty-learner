import InfoPanel from '@/components/InfoPanel'
import { IconBook2 } from '@tabler/icons-react'
import { useCallback, useState } from 'react'

export default function DictRequest() {
  const [showPanel, setShowPanel] = useState(false)

  const onOpenPanel = useCallback(() => {
    setShowPanel(true)
  }, [])

  const onClosePanel = useCallback(() => {
    setShowPanel(false)
  }, [])

  return (
    <>
      {showPanel && (
        <InfoPanel
          openState={showPanel}
          title="申请词典"
          icon={IconBook2}
          btnColor="bg-indigo-300"
          iconColor="text-indigo-500"
          iconBackgroundColor="bg-indigo-100"
          onClose={onClosePanel}
        >
          <p className="text-sm text-gray-600 dark:text-gray-300">
            如果您有相关的编程基础，可以参考
            <a
              href="https://github.com/Kaiyiwing/qwerty-learner/blob/master/docs/toBuildDict.md"
              className="px-2 text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              导入词典
            </a>
            ，给项目贡献新的词典。
            <br />
            <br />
            如果您没有相关的编程基础，可以讲您的字典需求发送邮件到 me@kaiyi.cool, 或者网页底部添加我们的用户社群进行反馈。
          </p>
          <br />
        </InfoPanel>
      )}
      <span className="cursor-pointer pr-6 text-sm text-indigo-500" onClick={onOpenPanel}>
        没有找到想要的词典？
      </span>
    </>
  )
}