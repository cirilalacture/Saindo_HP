import { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';

interface RichTextEditorProps {
  name: string;
  initialValue?: string | object | null;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

export default function RichTextEditor({
  name,
  initialValue,
  label,
}: RichTextEditorProps) {
  const [contentJson, setContentJson] = useState<string>('');

  const parseInitial = () => {
    if (!initialValue) {
      return {
        type: 'doc',
        content: [{ type: 'paragraph' }],
      };
    }
    if (typeof initialValue === 'string') {
      try {
        return JSON.parse(initialValue);
      } catch {
        return {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [{ type: 'text', text: initialValue }],
            },
          ],
        };
      }
    }
    return initialValue;
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-brand-vermilion underline font-medium hover:text-brand-vermilion-dark',
        },
      }),
      Image.configure({
        inline: false,
        HTMLAttributes: {
          class: 'rounded-lg max-w-full my-4 border border-brand-border',
        },
      }),
    ],
    content: parseInitial(),
    editorProps: {
      attributes: {
        class:
          'prose prose-neutral max-w-none min-h-[220px] px-4 py-3 focus:outline-none text-sm text-brand-charcoal font-sans leading-relaxed',
      },
    },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      setContentJson(JSON.stringify(json));
    },
  });

  useEffect(() => {
    if (editor) {
      setContentJson(JSON.stringify(editor.getJSON()));
    }
  }, [editor]);

  if (!editor) {
    return (
      <div className="rounded border border-brand-border bg-brand-porcelain p-4 text-xs text-brand-stone font-heading">
        Memuat editor teks...
      </div>
    );
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Masukkan alamat URL tautan:', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const addImage = () => {
    const url = window.prompt('Masukkan alamat URL gambar:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-xs font-heading font-bold uppercase tracking-wider text-brand-charcoal">
          {label}
        </label>
      )}

      {/* Editor Box */}
      <div className="rounded-lg border border-brand-border bg-white overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-brand-vermilion/20 focus-within:border-brand-vermilion transition-all">
        
        {/* Minimalist Toolbar */}
        <div className="flex flex-wrap items-center gap-1 p-2 border-b border-brand-border bg-brand-sand/30 text-xs font-heading">
          {/* Paragraph */}
          <button
            type="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
              editor.isActive('paragraph')
                ? 'bg-brand-charcoal text-white font-bold'
                : 'text-brand-slate hover:bg-brand-sand hover:text-brand-charcoal'
            }`}
          >
            P
          </button>

          {/* Heading 2 */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
              editor.isActive('heading', { level: 2 })
                ? 'bg-brand-charcoal text-white font-bold'
                : 'text-brand-slate hover:bg-brand-sand hover:text-brand-charcoal'
            }`}
          >
            H2
          </button>

          {/* Heading 3 */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
              editor.isActive('heading', { level: 3 })
                ? 'bg-brand-charcoal text-white font-bold'
                : 'text-brand-slate hover:bg-brand-sand hover:text-brand-charcoal'
            }`}
          >
            H3
          </button>

          <span className="w-px h-4 bg-brand-border mx-1" />

          {/* Bold */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${
              editor.isActive('bold')
                ? 'bg-brand-charcoal text-white'
                : 'text-brand-slate hover:bg-brand-sand hover:text-brand-charcoal'
            }`}
          >
            B
          </button>

          {/* Italic */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`px-2.5 py-1 rounded text-xs italic transition-colors ${
              editor.isActive('italic')
                ? 'bg-brand-charcoal text-white'
                : 'text-brand-slate hover:bg-brand-sand hover:text-brand-charcoal'
            }`}
          >
            I
          </button>

          {/* Strike */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`px-2.5 py-1 rounded text-xs line-through transition-colors ${
              editor.isActive('strike')
                ? 'bg-brand-charcoal text-white'
                : 'text-brand-slate hover:bg-brand-sand hover:text-brand-charcoal'
            }`}
          >
            S
          </button>

          <span className="w-px h-4 bg-brand-border mx-1" />

          {/* Bullet List */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              editor.isActive('bulletList')
                ? 'bg-brand-charcoal text-white'
                : 'text-brand-slate hover:bg-brand-sand hover:text-brand-charcoal'
            }`}
          >
            • List
          </button>

          {/* Ordered List */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              editor.isActive('orderedList')
                ? 'bg-brand-charcoal text-white'
                : 'text-brand-slate hover:bg-brand-sand hover:text-brand-charcoal'
            }`}
          >
            1. List
          </button>

          {/* Blockquote */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              editor.isActive('blockquote')
                ? 'bg-brand-charcoal text-white'
                : 'text-brand-slate hover:bg-brand-sand hover:text-brand-charcoal'
            }`}
          >
            &ldquo; Kutipan
          </button>

          <span className="w-px h-4 bg-brand-border mx-1" />

          {/* Link */}
          <button
            type="button"
            onClick={setLink}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              editor.isActive('link')
                ? 'bg-brand-charcoal text-white'
                : 'text-brand-slate hover:bg-brand-sand hover:text-brand-charcoal'
            }`}
          >
            Tautan
          </button>

          {/* Image */}
          <button
            type="button"
            onClick={addImage}
            className="px-2.5 py-1 rounded text-xs text-brand-slate hover:bg-brand-sand hover:text-brand-charcoal transition-colors"
          >
            + Gambar
          </button>

          <span className="w-px h-4 bg-brand-border mx-1" />

          {/* Undo */}
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="px-2 py-1 rounded text-xs text-brand-slate hover:bg-brand-sand disabled:opacity-30 disabled:hover:bg-transparent"
            title="Undo"
          >
            ↺
          </button>

          {/* Redo */}
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="px-2 py-1 rounded text-xs text-brand-slate hover:bg-brand-sand disabled:opacity-30 disabled:hover:bg-transparent"
            title="Redo"
          >
            ↻
          </button>
        </div>

        {/* Editor Area */}
        <EditorContent editor={editor} />
      </div>

      {/* Hidden input storing TipTap JSON string for form submission */}
      <input type="hidden" name={name} value={contentJson} />
    </div>
  );
}
