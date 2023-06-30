import { supabase } from '@/lib/supabase'
import { Database } from '@/types/supabase'

export const fetchPolls = async (id = '1') => {
  const { data, error } = await supabase.from('polls').select('id')
  if (error) throw error
  return data
}

export type TVoteOption = Database['public']['Tables']['options']['Row']
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
  pollId,
}: {
  optionId: number
  pollId: number
}) => {
  const { data, error } = await supabase
    .from('votes')
    .insert([{ option_id: optionId, poll_id: pollId }])
  if (error) throw error
  return data
}
