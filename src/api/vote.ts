import { supabase } from '@/lib/supabase'

export const fetchPolls = async (id = '1') => {
  const { data, error } = await supabase.from('polls').select('id')
  if (error) throw error
  return data
}

interface GetVoteOptions {
  id: number
  poll_id: number
  title: string
  description: string[]
}
export const getVoteOptions = async () => {
  const { data: options, error } = await supabase
    .from('options')
    .select('*')
    .eq('poll_id', '1')
  if (error) throw error
  return options
}

export const postVote = async ({
  optionId,
  voteId,
}: {
  optionId: number
  voteId: number
}) => {
  const { data, error } = await supabase
    .from('votes')
    .insert([{ option_id: optionId, poll_id: voteId }])
  if (error) throw error
  return data
}
