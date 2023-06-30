import { useEffect, useState } from 'react'

import { getVoteOptions, postVote, TVoteOption } from '@/api/vote'
import { HAS_VOTED_LOCAL_DATA_KEY } from '@/home/constants'
import { getLocalData, setLocalData } from '@/utils'

export default function Vote() {
  const [voteOptions, setVoteOptions] = useState<TVoteOption[]>()
  const [hasVoted, setHasVoted] = useState<boolean>(false)

  const handleClickVoteButton = async (voteOption: TVoteOption) => {
    const { id: optionId, poll_id: pollId } = voteOption

    if (hasVoted) {
      return
    }

    setLocalData(HAS_VOTED_LOCAL_DATA_KEY, true)
    setHasVoted(true)

    await postVote({
      optionId,
      pollId: pollId!,
    })
  }

  const initFetch = async () => {
    const hasVoted = getLocalData(HAS_VOTED_LOCAL_DATA_KEY)
    if (hasVoted) {
      setHasVoted(true)
    }

    const voteOptions = await getVoteOptions()
    setVoteOptions(voteOptions)
  }

  useEffect(() => {
    initFetch()
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
              disabled={hasVoted}
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
