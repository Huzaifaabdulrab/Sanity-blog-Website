export const blogs = {
    name: "blog",
    title: "Blogs",
    type: "document",
    fields: [
        {
          name: "Image",
          title: "Main image",
          type: "image",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          }, 
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "blog",
            title: "Blog Content",
            type: "string",
        },
        {
            name: "author",
            title: "Author",
            type: "string",
            to: { type: "author" },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "date",
            validation: (Rule: any) => Rule.required(),
        },
    ],

    preview: {
        select: {
            title: "title",
            author: "author",
            media: "mainImage",
        },
        prepare(selection: any) {
            const { author } = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            });
        },
    },
};
