versioning
    --> todo!

    x.x.x
    Major Release       Not compatible with previous major release.
                        Requires manual customization effort on update

      Minor Release     Compatible with all other minor releases from same major release.
                        Requires no manual customization effort except when new components are to be used after update.

                        triggered by:
                            sprint change
                            "current state" request



        Hot-Fix         See above.
                        Requires no manual customization effort.

    dist folder
        version number included as comment in file headers

    gulp-tasks
        gulp-build-*
            hotfix
            minor
            major
        config-file
            + initial version from which to count up

css notations?
    BEM
        keep the nesting to a semantically ok minimum
    similar fw components
        very specific naming
        no "general" version
        --> todo!

        no: table.table
        no: table.simple
        do: table.?
        do: table.event-list

    every component has a classname as root selector
        always: .classname .??? / tagname.classname .???
        never:  tagname .???

prefixing
    //vie-*
    v-*
    w-*
    wm-*
    x-*
    xx-*

    prefix in prefix variable 
        sass
        nunjucks

    prefixing states, js-selectors?
        .wm-btn.wb-btn__active
        .wm-something-somethingelse__something-something.wm-something-somethingelse__something-something__active

css compatibility fixes
    clay-ui requires a fix.css file with lots of !important rules

css reset
    normalize.css
    github.com/necolas/normalize.css

