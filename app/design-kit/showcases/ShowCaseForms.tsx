function FormOne() {
  return (
    <form className='space-y-5 bg-surface border border-outline rounded-lg p-6'>
      {/* Text input */}
      <div className='space-y-1'>
        <label className='text-sm font-medium text-on-surface'>Email</label>
        <input
          type='email'
          placeholder='you@example.com'
          className='
              w-full rounded-md border border-outline
              bg-surface-variant text-on-surface
              placeholder:text-on-surface-muted
              px-3 py-2
              focus:outline-none
              focus:ring-2 focus:ring-primary
            '
        />
      </div>

      {/* Error state */}
      <div className='space-y-1'>
        <label className='text-sm font-medium text-on-surface'>Password</label>
        <input
          type='password'
          placeholder='••••••••'
          className='
              w-full rounded-md border border-error
              bg-surface-variant text-on-surface
              placeholder:text-on-surface-muted
              px-3 py-2
              focus:outline-none
              focus:ring-2 focus:ring-error
            '
        />
        <p className='text-sm text-error'>
          Password must be at least 8 characters
        </p>
      </div>

      {/* Select */}
      <div className='space-y-1'>
        <label className='text-sm font-medium text-on-surface'>Role</label>
        <select
          className='
              w-full rounded-md border border-outline
              bg-surface-variant text-on-surface
              px-3 py-2
              focus:outline-none
              focus:ring-2 focus:ring-primary
            '
        >
          <option>User</option>
          <option>Admin</option>
          <option>Owner</option>
        </select>
      </div>

      {/* Checkbox */}
      <label className='flex items-center gap-2 text-on-surface'>
        <input
          type='checkbox'
          className='
              h-4 w-4 rounded border-outline
              text-primary focus:ring-primary
            '
        />
        Remember me
      </label>

      {/* Disabled */}
      <div className='space-y-1'>
        <label className='text-sm font-medium text-on-surface-muted'>
          Disabled field
        </label>
        <input
          disabled
          placeholder='Disabled'
          className='
              w-full rounded-md border border-outline
              bg-surface-variant text-on-surface-muted
              px-3 py-2 opacity-60 cursor-not-allowed
            '
        />
      </div>

      {/* Actions */}
      <div className='flex gap-3 pt-4'>
        <button
          type='submit'
          className='bg-primary text-on-primary px-4 py-2 rounded'
        >
          Submit
        </button>
        <button
          type='button'
          className='bg-surface text-on-surface border border-outline px-4 py-2 rounded'
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

function FormTwo() {
  return (
    <form className='w-full max-w-2xl space-y-6 bg-surface p-6 rounded-lg border border-outline'>
      {/* Section Title */}
      <div>
        <h2 className='text-xl font-semibold text-on-surface'>
          Profile & Preferences
        </h2>
        <p className='text-sm text-on-surface-muted'>
          Covers selects, radios, checkboxes, file, date, range, and switches.
        </p>
      </div>

      {/* Email */}
      <div className='space-y-1'>
        <label className='text-sm font-medium text-on-surface'>Email</label>
        <input
          type='email'
          placeholder='you@example.com'
          className='w-full rounded-md bg-surface-variant text-on-surface border border-outline px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none'
        />
      </div>

      {/* Date + Time */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='space-y-1'>
          <label className='text-sm font-medium text-on-surface'>
            Date of Birth
          </label>
          <input
            type='date'
            className='w-full rounded-md bg-surface-variant text-on-surface border border-outline px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none'
          />
        </div>

        <div className='space-y-1'>
          <label className='text-sm font-medium text-on-surface'>
            Preferred Time
          </label>
          <input
            type='time'
            className='w-full rounded-md bg-surface-variant text-on-surface border border-outline px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none'
          />
        </div>
      </div>

      {/* Select */}
      <div className='space-y-1'>
        <label className='text-sm font-medium text-on-surface'>Country</label>
        <select className='w-full rounded-md bg-surface-variant text-on-surface border border-outline px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none'>
          <option>United States</option>
          <option>Vietnam</option>
          <option>Germany</option>
          <option>Japan</option>
        </select>
      </div>

      {/* Radio Group */}
      <div className='space-y-2'>
        <p className='text-sm font-medium text-on-surface'>Subscription Plan</p>
        <div className='flex gap-6'>
          <label className='flex items-center gap-2 text-on-surface'>
            <input
              type='radio'
              name='plan'
              className='accent-primary'
              defaultChecked
            />
            Free
          </label>
          <label className='flex items-center gap-2 text-on-surface'>
            <input
              type='radio'
              name='plan'
              className='accent-primary'
            />
            Pro
          </label>
          <label className='flex items-center gap-2 text-on-surface'>
            <input
              type='radio'
              name='plan'
              className='accent-primary'
            />
            Enterprise
          </label>
        </div>
      </div>

      {/* Checkboxes */}
      <div className='space-y-2'>
        <p className='text-sm font-medium text-on-surface'>Notifications</p>
        <div className='space-y-2'>
          <label className='flex items-center gap-2 text-on-surface'>
            <input
              type='checkbox'
              className='accent-primary'
            />
            Email notifications
          </label>
          <label className='flex items-center gap-2 text-on-surface'>
            <input
              type='checkbox'
              className='accent-primary'
            />
            SMS notifications
          </label>
          <label className='flex items-center gap-2 text-on-surface-muted'>
            <input
              type='checkbox'
              className='accent-primary'
              disabled
            />
            Push notifications (disabled)
          </label>
        </div>
      </div>

      {/* Range */}
      <div className='space-y-1'>
        <label className='text-sm font-medium text-on-surface'>
          Notification Frequency
        </label>
        <input
          type='range'
          min={0}
          max={100}
          className='w-full accent-primary'
        />
        <div className='flex justify-between text-xs text-on-surface-muted'>
          <span>Low</span>
          <span>High</span>
        </div>
      </div>

      {/* File Upload */}
      <div className='space-y-1'>
        <label className='text-sm font-medium text-on-surface'>
          Profile Image
        </label>
        <input
          type='file'
          className='w-full text-sm text-on-surface-muted
            file:mr-4 file:rounded-md file:border-0
            file:bg-primary file:px-4 file:py-2
            file:text-on-primary file:cursor-pointer'
        />
      </div>

      {/* Toggle / Switch */}
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm font-medium text-on-surface'>Public Profile</p>
          <p className='text-xs text-on-surface-muted'>
            Allow others to view your profile
          </p>
        </div>
        <input
          type='checkbox'
          className='h-5 w-5 accent-primary'
          defaultChecked
        />
      </div>

      {/* Actions */}
      <div className='flex gap-4 pt-4'>
        <button
          type='submit'
          className='bg-primary text-on-primary px-4 py-2 rounded-md'
        >
          Save Changes
        </button>
        <button
          type='button'
          className='border border-outline text-on-surface px-4 py-2 rounded-md'
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export function ShowCaseForms() {
  return (
    <div className='space-y-6 bg-background p-8 rounded-lg max-w-xl '>
      <h2 className='text-2xl font-semibold text-on-background'>Forms</h2>
      <div className='flex gap-12'>
        <div className='flex-1'>
          <FormOne />
        </div>
        <div className='flex-1'>
          <FormTwo />
        </div>
      </div>
    </div>
  )
}
