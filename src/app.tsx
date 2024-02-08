import { ChangeEvent, FormEvent, useState } from 'react'
import logo from '../src/assets/logo_nlw.png'
import { NoteCard } from './components/note-card'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { toast } from 'sonner'

export function App() {
  const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true);
  const [content, setContent] = useState('')

  const note = {
    date: new Date(),
    content: 'Hello World'
  }

  function handleStartEditor() {
    setShouldShowOnBoarding(false)
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)

    if (event.target.value == '') {
      setShouldShowOnBoarding(true)
    }

    toast.success('Nota criada com sucesso')
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault();


  }

  return (

    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="nlw expert" />
      <form className='w-full'>
        <input
          placeholder='Busque em suas notas'
          type="text"
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>
      <div className='h-px bg-slate-700' />
      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <Dialog.Root>
          <Dialog.Trigger className='hover:ring-2 hover:ring-slate-600 rounded-md flex flex-col bg-slate-700 p-5 gap-3 text-left'>
            <span className='text-sm font-medium text-slate-500'>Adicionar nota</span>
            <p className='text-sm leading-6 text-slate-400'>Grave uma nota em áudio que será convertida para texto automaticamente</p>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="inset-0 fixed bg-black/50" />
            <Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full outline-none bg-slate-700 rounded-md flex flex-col h-[60vh]'>
              <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
                <X className='w-5 h-5' />
              </Dialog.Close>

              <form className="flex-1 flex flex-col" onSubmit={handleSaveNote}>
                <div className='flex flex-1 flex-col gap-3 p-5'>
                  <span className='text-sm font-medium text-slate-300'>
                    Adicionar nota
                  </span>
                  {shouldShowOnBoarding ?
                    <p className='text-sm leading-6 text-slate-400'>
                      Comece <button
                        className='font-medium text-lime-400 hover:underline'
                      >gravando uma nota&nbsp;
                      </button>
                      em áudio ou se preferir &nbsp;
                      <button
                        onClick={handleStartEditor}
                        className='font-medium text-lime-400 hover:underline'
                      >utilize apenas texto</button>.
                    </p>
                    :
                    <textarea
                      autoFocus
                      onChange={handleContentChanged}
                      className='text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none' />
                  }
                </div>
                <button
                  type="submit"
                  className='w-full bg-lime-400 py-4 text-center hover:bg-lime-500 text-sm font-medium text-lime-950 outline-none'>
                  Salvar nota
                </button>
              </form>
            </Dialog.Content>
          </Dialog.Portal>

        </Dialog.Root>
        <NoteCard note={note} />
      </div>
    </div>
  )
}
