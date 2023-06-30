import { useEffect, useState } from 'react'

import { getVoteOptions, postVote, TVoteOption } from '@/api/vote'

export default function Vote() {
  const [voteOptions, setVoteOptions] = useState<TVoteOption[]>()

  const handleClickVoteButton = async (voteOption: TVoteOption) => {
    const { id: optionId, poll_id: pollId } = voteOption

    await postVote({
      optionId,
      pollId: pollId!,
    })
  }

  useEffect(() => {
    getVoteOptions().then((res) => {
      setVoteOptions(res)
    })
  }, [])

  return (
    <div className="flex items-center">
      <div className="flex gap-[10px]">
        {voteOptions?.map((voteOption) => {
          const { id, title, description } = voteOption
          return (
            <button
              key={id}
              className="p-[10px] border rounded-[5px]"
              onClick={() => handleClickVoteButton(voteOption)}
            >
              <div>{title}</div>
              <div>
                {description?.map((desc) => {
                  return <div key={desc}>{desc}</div>
                })}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
